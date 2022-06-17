import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='infoForm'>
                <h3>Your Info</h3>
                <div>
                    <input type="text" className="InfoInput" placeholder='First Name' name='FirsName' />

                    <input type="text" className="InfoInput" placeholder='Last Name' name='LastName' />
                </div>
                <div>

                    <input type="text" className="InfoInput" placeholder='Work At' name='WorkAT' />
                </div>
                <div>

                    <input type="text" className="InfoInput" placeholder='Lives In' name='LivesIN' />

                    <input type="text" className="InfoInput" placeholder='Country' name='Country' />
                </div>
                <div>
                    <input type="text" className='InfoInput' placeholder='Relationship status' />
                </div>
                <div>
                    Profile Image
                    <input type="file" name='profileImg' />
                    Cover Image
                    <input type="file" name='coverImg' />
                </div>
                <button className="button infoButton" >Update</button>
            </form>
        </Modal>
    );
}
export default ProfileModal