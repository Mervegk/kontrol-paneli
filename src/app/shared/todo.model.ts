import { v4 as uuidv4 } from "uuid"

export class Todo {
    id: string
    //text: string
    completed: boolean

    //uuidv4 ile işin olduğunda sadece public text: string yazılsın. uuidv4() yorum satırından çıksın
    constructor(public text: string) {
        this.id = uuidv4()

    }

}