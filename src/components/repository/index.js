import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class Repository extends Component {
    state = {
        repo: null
    }

    /**
     * 
     * @param {*} name 
     */
    async getDetails(name) {
        try {
            // Make request
            const res = await fetch(`https://api.github.com/repos/${name}`, { mode: 'cors' })
            return res.json()
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    async componentDidMount() {
        const { name } = this.props
        const repo = await this.getDetails(name)

        console.log(`${name} response: `, repo)
        this.setState({ repo })
    }

    render() {
        const { repo } = this.state;

        if (!repo) {
            return <div className="Card Card--loading"><h2>Loading...</h2></div>
        }

        if (repo.message) {
            return <div className="Card Card--error">Error: {repo.message}</div>
        }

        return (
            <a href={repo.svn_url} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="Card">
                <aside>
                    <img
                        width="48"
                        height="48"
                        className="Avatar"
                        src={repo.owner.avatar_url}
                        alt={`Profile picture for ${repo.owner.login}`}
                    />
                </aside>
                <header>
                    <h2 className="Card__title">{repo.full_name}</h2>
                    <span className="Card__meta">{repo.description}</span>
                </header>
            </a>
        )
    }
}

Repository.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Repository
