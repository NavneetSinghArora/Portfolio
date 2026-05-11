import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                id: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagId: string) {
    const filteredPosts: CollectionEntry<'blog'>[] = posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagId));
    return filteredPosts;
}

// Dynamically import all logos from src/assets/icons
const logos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/icons/*.{svg,png,webp,jpg,jpeg}', { eager: true });

export function resolveIcon(name: string | undefined) {
    if (!name) return '';
    if (name.startsWith('http')) return name;
    
    // Handle special cases
    let searchName = name;
    if (name.toLowerCase().includes('n8n')) {
        searchName = 'n8n';
    }
    
    const extensions = ['.svg', '.png', '.webp', '.jpg', '.jpeg'];
    for (const ext of extensions) {
        // Try both absolute and relative path formats
        const paths = [
            `/src/assets/icons/${searchName}${ext}`
        ];
        
        for (const path of paths) {
            const asset = logos[path];
            if (asset) {
                return (asset.default as any)?.src || asset.default || asset;
            }
        }
    }
    return '';
}
