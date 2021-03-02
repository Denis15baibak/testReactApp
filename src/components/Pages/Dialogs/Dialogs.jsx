import React from 'react'
import Menu from './../../Menu/Menu'
import Title from '../../Menu/Title/Title'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    

    let dialogs = props.dialogsData.map((el) => <Menu name={el.name} path={el.id} />)

    let messages = props.messagesData.map((messages) => <Messages message={messages.message} likesCount={messages.likesCount} />)

    return (

        <div id='dialogs-wrapper'>
            <Title />
            <div id='dlg' className='messages'>
                {dialogs}
            </div>
            {messages}
        </div>

    )

}
export default Dialogs;