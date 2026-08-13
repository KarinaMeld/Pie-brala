import {contacts} from "../../constants";

const Contacts = () => {
    return (
        <div className="section" id="contacts">
            <h2 className="text-4xl">
                Sazinies ar mums
            </h2>

            <div className="contacts-info flex flex-col gap-5">

                <p className="contacts-p">
                    {contacts.address}
                </p>
                <p className="contacts-p">
                    {contacts.email}
                </p>
                <p className="contacts-p">
                    {contacts.phoneReservations}
                </p>
                <p className="contacts-p">
                    {contacts.phoneBanquets}
                </p>
                <p className="contacts-p">
                    {contacts.phoneBanquets2}
                </p>
                <p className="contacts-p">
                    {contacts.gps}
                </p>
            </div>
        </div>
    )
}
export default Contacts
