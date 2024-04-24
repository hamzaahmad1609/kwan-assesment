export { }

declare global {

    interface ListingCardProps {
        user: IUser
        selecteUser: (user: IUser) => void
        
    }

    interface ISelectComponentProps {
        options: IOption[]
        selectedOption: IOption | null
        selectOption: (selected: IOption | null) => void
    }
}