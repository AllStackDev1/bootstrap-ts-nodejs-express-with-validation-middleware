export default interface IBaseRepo {
  get(query: Record<string, unknown>): Promise<[Record<string, unknown>]>
  //   getOne(query: Record<string, unknown>): Promise<Record<string, unknown>>
  //   insert(payload: Record<string, unknown>): Promise<[Record<string, unknown>]>
  //   update(
  //     id: string,
  //     payload: Record<string, unknown>
  //   ): Promise<Record<string, unknown>>
  //   delete(id: string): Promise<Record<string, unknown>>
  //   getById(id: string): Promise<Record<string, unknown>>
  //   aggregate(query: Record<string, unknown>): Promise<[Record<string, unknown>]>
}
