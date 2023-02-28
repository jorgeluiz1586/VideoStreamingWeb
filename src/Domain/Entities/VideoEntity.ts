import { AbstractEntity } from "./AbstractEntity";

export class VideoEntity extends AbstractEntity {
    private title?: string;
    private description?: string;
    private size?: string;
    private duration?: string;
    private category?: string;
    private reactions?: object;
    
    UserEntity(
        id: number,
        title: string,
        description: string,
        size: string,
        duration: string,
        category: string,
        reactions: object,
    ) {
        this.setTitle(title);
        this.setDescription(description);
        this.setSize(size);
        this.setDuration(duration);
        this.setCategory(category);
        this.setReactions(reactions);
    }

    public getTitle() {
        const title = this.title;
        return title;
    }

    public getDescription() {
        const description = this.description;
        return description;
    }

    public getSize() {
        const size = this.size;
        return size;
    }

    public getDuration() {
        const duration = this.duration;
        return duration;
    }

    public getCategory() {
        const category = this.category;
        return category;
    }

    public getReactions() {
        const reactions = this.reactions;
        return reactions;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setSize(size: string) {
        this.size = size;
    }

    public setDuration(duration: string) {
        this.duration = duration;
    }

    public setCategory(category: string) {
        this.category = category;
    }

    public setReactions(reactions: object) {
        this.reactions = reactions;
    }
}
