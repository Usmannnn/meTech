export interface TCard {
    id?: number,
    image: string,
    text: string
    logo: string,
    customStyle: { backgroundColor: string, iconWrapper: string },
    action: any
}