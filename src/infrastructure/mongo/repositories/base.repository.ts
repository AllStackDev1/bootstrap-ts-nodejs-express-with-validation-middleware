/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, Document } from 'mongoose'
import { IBaseRepo } from '../interfaces'

/**
 * @summary As a repository this class has direct contact with the database
 * drive, and exposes basic CRUD methods which are to be inherited by other subclasses.
 * @description This class must be extended by other repository subclasses, and assums
 * all payload coming are sterilized and validated properly.
 * @author Chinedu Ekene Okpala <chinedu.okpala@completefarmer.com>
 */

export default abstract class BaseRepository implements IBaseRepo {
  constructor(private model: Model<Document>) {
    this.model = model
  }

  create = async (
    payload: Record<string, unknown> | Record<string, unknown>[]
  ): Promise<Document<any, any>[] | Document<any, any> | null> => {
    return await this.model.create(payload)
  }

  findById = async (id: string): Promise<Document<any, any> | null> => {
    return await this.model.findById(id)
  }

  find = async (
    query: Record<string, unknown>
  ): Promise<Document<any, any>[] | null> => {
    return await this.model.find(query)
  }

  findOne = async (
    query: Record<string, unknown>
  ): Promise<Document<any, any> | null> => {
    return await this.model.findOne(query)
  }

  update = async (
    id: string,
    payload: Record<string, unknown>
  ): Promise<Document<any, any> | null> => {
    return await this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  delete = async (id: string): Promise<Document<any, any> | null> => {
    return await this.model.findByIdAndRemove(id)
  }

  aggregate = async (payload: any[]): Promise<Document<any, any>[] | null> => {
    return await this.model.aggregate(payload)
  }
}
