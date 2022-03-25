export interface ICustomTypePosts {
  uid: string
  title: string
  subtitle: string
  author: string
  banner: string
  content: Array<{
    heading: string
    body: Array<{ type: string; text: string; spans: [] }>
  }>
}
