import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            mobile: '',
            isAgreed: false,
            gender: '',
            file: null,
            name: '',
            error: false
        }
    }

    handleChange = e => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        })
    }

    handleCheck = () => {
        // console.log(this.state.isAgreed)
        this.setState({
            isAgreed: this.state.isAgreed ? false : true,
            error: false
        })
    }

    handleUpload = event => {
        // console.log(event.target.files[0])
        this.setState(({
            file: event.target.files[0],
            loaded: 0,
        }), () => {
            const data = new FormData()
            data.append('file', this.state.file)
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {error,loaded,...obj} = this.state
        Object.values(obj).forEach(value => {
            if (!value) {
                this.setState({ error: true })
            }
        })
        setTimeout(() => {
            console.log(this.state)
        }, 0);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    {
                        this.state.error &&
                        <div className="alert alert-danger" role="alert">
                            Kindly fill all the inputs
                        </div>
                    }
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" className="form-control" placeholder="Username(only alphabets)" name="name" id="name"
                            pattern="[A-Za-z/\s/g]{1,}" value={this.state.name} onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" onChange={this.handleChange} className="form-control" id="email" placeholder="someone@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="tel" name="mobile" onChange={this.handleChange} pattern="[0-9]{11}" className="form-control" id="mobile" placeholder="0+10 digit mobile number" />
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={this.handleChange} type="radio" name="gender" id="male" value="male" />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" onChange={this.handleChange} name="gender" id="female" value="female" />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" checked={this.state.isAgreed} onChange={this.handleCheck} className="form-check-input" name="isAgreed" id="checkbox"/>
                        <label className="form-check-label" htmlFor="checkbox">agree terms</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Upload your photo</label>
                        <input type="file" className="form-control-file" id="file" onChange={this.handleUpload} name="file" />
                    </div>
                    <button type="submit" className="btn btn-success col-md-12">Submit</button>
                </form>
            </div>
        )
    }
}