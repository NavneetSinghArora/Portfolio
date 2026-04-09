export type ImageInput = {
    src: ImageMetadata | string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    target?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: ImageInput;
    actions?: Link[];
};

export type SubscribeForm = {
    action: string;
    emailFieldName?: string;
    hiddenFields?: { name: string; value: string }[];
    honeypotFieldName?: string;
};

export type Subscribe = {
    enabled?: boolean;
    title?: string;
    text?: string;
    form?: SubscribeForm;
};

export type StackItem = {
    label: string;
    icon?: string | { light: string; dark: string };
};

export type StackCategory = {
    title: string;
    items: StackItem[];
};

export type Stack = {
    title: string;
    description: string;
    categories: StackCategory[];
};

export type SiteConfig = {
    website: string;
    avatar?: ImageInput;
    title: string;
    subtitle?: string;
    description: string;
    keywords?: string[];
    image?: ImageInput;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    stack?: Stack;
    github?: string;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};
