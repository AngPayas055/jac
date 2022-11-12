import { CommentModel } from "./comment.model";

export class PostModel {
    id: number;
    user_id: string;
    content: string;
    name: string;
    comments: CommentModel[];
}