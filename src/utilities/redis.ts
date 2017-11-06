import { Observable } from 'rxjs';
import * as redis from 'redis';
import ILocation from '../model/ILocation';
const redisClient = redis.createClient();
//.createClient(process.env.REDIS_URL || config.redis.host);

export default class Redis {
    static get() :Observable<any>{
        return new Observable(observer => {
            redisClient.keys('*', (err, resp) => {
                if(err){
                    return observer.error(err);
                }
                observer.next(resp);
                observer.complete();
            })
        })
    }
    static set(id: any, location: string) :Observable<any>{
        return new Observable(observer => {
            redisClient.set(id, location, (err, resp) => {
                if(err){
                    return observer.error(err);
                }
                observer.next(resp);
                observer.complete();
            })
        })
    }
    static delete(id: any){
        return new Observable(observer => {
            redisClient.del(id, (err, resp) => {
                if(err){
                    return observer.error(err);
                }
                observer.next(resp);
                observer.complete();
            })
        })
    }
    static deleteAll(){
        return new Observable(observer => {
            redisClient.flushdb((err, resp) => {
                if(err){
                    return observer.error(err);
                }
                observer.next(resp);
                observer.complete();
            })
        })
    }
    
}