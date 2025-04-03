import type {NextConfig} from "next";

export default async (phase: string, {defaultConfig}: { defaultConfig: NextConfig }) => {
    const nextConfig: NextConfig = {
        ...defaultConfig,
        pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
        transpilePackages: ['@patternfly/react-core', '@patternfly/react-icons',
            '@patternfly/react-tokens', '@patternfly/react-styles'],
    }
    return nextConfig;
};
