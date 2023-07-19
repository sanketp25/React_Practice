import apiClients from "./api-clients";
//use f2 to rename classes

interface Entity{
    id: number;
}

class HttpService{

    endpoint: string;

    constructor(endpoint:string){
        this.endpoint = endpoint
    }
    getAll<T>(){
        const controller = new AbortController();
        const request = apiClients
        .get<T[]>(this.endpoint, {
          signal: controller.signal,
        });

        return {request,cancel: ()=>controller.abort()}

    }
    add<T>(entity: T){
        return apiClients
        .post(this.endpoint, entity)
    }
    delete< T extends Entity>(entity: T){
        return apiClients.delete( this.endpoint +"/" + entity.id);
    }

    update<T extends Entity>(entity : T){
        return apiClients.patch(this.endpoint + "/" + entity.id, entity);
    }

}

const create = (endpoint:string) => new HttpService(endpoint);
export default create;