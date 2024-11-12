export function toNode(content: string): { type: string; content: any[]; } {

    const paragraphs = content.split('\n').map(text => ({
        type: 'paragraph',
        content: [{
            type: 'text',
            text: text
        }]
    }));

    return {type: 'doc', content: paragraphs};
}

