import * as yaml from 'js-yaml';
import * as fs from 'fs';

export interface Rule {
    name: string;
    regex: RegExp;
}

export type Rules = {
    [key: string]: Rule
}

export interface Config {
    version: string;
    branch: {
        projects: string[];
        ticketRegex: RegExp;
        shouldIncludeTicketNo: boolean;
        featureOwners: {
            [key: string]: string;
        },
        meta: {
            maxLength: number;
        },
        rules: Rules[]
    }
}
export const loadConfig = (path: string): Config => {
    try {
        return yaml.load(fs.readFileSync(path ? path : '../pull-request-validator-config.yaml', 'utf8')) as Config;
    } catch (e) {
        console.log(e);
        return {} as Config;
    }
}
