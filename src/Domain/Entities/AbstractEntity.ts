export abstract class AbstractEntity {
    private id?: number;
    private createdAt?: Date;
    private updatedAt?: Date;

    AbstractEntity(id: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
