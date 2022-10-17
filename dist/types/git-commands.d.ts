export declare const getLocalBranch: () => Promise<import("./command").CommandResult>;
export declare const getAuthUsingToken: (tokenFilePath: string) => Promise<import("./command").CommandResult>;
export declare const createPullRequest: (heading: string, body: string) => Promise<import("./command").CommandResult>;
