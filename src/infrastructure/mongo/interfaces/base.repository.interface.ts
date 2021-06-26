/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'mongoose'

export default interface IBaseRepo {
  findById(id: string): Promise<Document<any, any> | null>
  findOne(query: Record<string, unknown>): Promise<Document<any, any> | null>
  find(query: Record<string, unknown>): Promise<Document<any, any>[] | null>
  create(
    payload: Record<string, unknown>[] | Record<string, unknown>
  ): Promise<Document<any, any>[] | Document<any, any> | null>
  update(
    id: string,
    payload: Record<string, unknown>
  ): Promise<Document<any, any> | null>
  delete(id: string): Promise<Document<any, any> | null>
  aggregate(payload: any[]): Promise<Document<any, any>[] | null>
}
