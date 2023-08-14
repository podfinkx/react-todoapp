import React, { Component } from 'react';

import googleLogo from '/google.svg'
import githubLogo from '/github.svg'

export default class LoginCard extends Component {
    render() {

        return(
            <div className="flex flex-col py-10 bg-whit  rounded-lg space-y-5 text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <h3 className="text-lg font-medium">Login to access your to-do list</h3>
                <div className='space-x-2'>
                    <button className="btn">
                        <img src={googleLogo} className="logo" alt="Google logo" />
                        Google
                    </button>
                    <button className="btn">
                        <img src={githubLogo} className="logo" alt="Github logo" />
                        Github
                    </button>
                </div>
            </div>
        )
    }
}