#!/usr/bin/env node
declare const rollup: any;
declare const path: any;
declare const resolve: any;
declare const babel: any;
declare const currentWorkingPath: string;
declare const src: any, pkgName: any;
declare const inputPath: any;
declare const fileName: any;
declare const inputOptions: {
    input: any;
    external: string[];
    plugins: any[];
};
declare const outputOptions: {
    file: string;
    format: string;
    exports: string;
}[];
declare function build(): Promise<void>;
//# sourceMappingURL=builder.d.ts.map