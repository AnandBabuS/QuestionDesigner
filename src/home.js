import React from 'react'
import isEmpty from 'lodash/isEmpty'
import Questions from './questions'
import Options from './options'
import Buttons from './buttons'

export const createQuestion = () => 'Sample Question'

export const createOptions = () => [ true, false ]

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        const history = localStorage.getItem("questionDesignState")
        this.state = !isEmpty(history) ? JSON.parse(history) : {
            questions: {},
            options: {},
            selectedData: '',
        }
        this.count = 0;
        this.createData = this.createData.bind(this)
        this.deleteData = this.deleteData.bind(this)
        this.handleSelected = this.handleSelected.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onQuestionChange = this.onQuestionChange.bind(this)
        this.addOption = this.addOption.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
    }

    createData() {
        const { questions, options } = this.state
        const newquestions = { [this.count]: createQuestion(), ...questions }
        const newOptions = { [this.count]: createOptions(), ...options }
        this.setState({ questions: newquestions, options: newOptions })
        this.count++
    }

    handleSelected(key) {
        this.setState({
            selectedData: key,
        })
    }

    deleteData(key) {
        const { questions } = this.state
        const newquestions = { ...questions }
        delete newquestions[this.state.selectedData]
        this.setState({ questions: newquestions })
    }

    onChange(index, data) {
        const { selectedData } = this.state
        const currentData = this.state.options[selectedData]
        currentData.splice(index, 1, data )
        this.setState({
            options: { ...this.state.options, [this.state.selectedData]: currentData }
        })
    }

    onQuestionChange(event) {
        const data = event.target.value
        this.setState({
            questions: { ...this.state.questions, [this.state.selectedData]: data }
        })
    }

    addOption() {
        const newData = this.state.options[this.state.selectedData]
        newData.push('')
        this.setState({
            options: { ...this.state.options, [this.state.selectedData]: newData }
        })
    }

    deleteOption() {
        const newData = this.state.options[this.state.selectedData]
        newData.pop()
        this.setState({
            options: { ...this.state.options, [this.state.selectedData]: newData }
        })
    }

    componentDidUpdate() {
        localStorage.setItem("questionDesignState", JSON.stringify(this.state))
    }

    render() {
        return (
        <div className="container-fluid full-height base">
            <div className="row full-height">
                <div className="col-lg-4 full-height questionPanel">
                    <Questions onSelected={this.handleSelected} questions={this.state.questions} selectedData={this.state.selectedData}/>
                    <Buttons onCreate={this.createData} onDelete={this.deleteData} />
                </div>
                <div className="col-lg-8 full-height inputPanel">
                    <Options addOption={this.addOption} deleteOption={this.deleteOption} onQuestionChange={this.onQuestionChange} question={this.state.questions[this.state.selectedData]} onChange={ this.onChange } options={ this.state.options[this.state.selectedData] } />
                </div>
            </div>
        </div>
        )
    }
}

