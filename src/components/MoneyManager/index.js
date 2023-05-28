import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    historyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onTitleInput = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  selectedOption = event => {
    this.setState({
      type: event.target.value,
    })
  }

  addEventListener = event => {
    event.preventDefault()
    const {title, amount, type, income, expenses} = this.state
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    const exAmount =
      type === 'EXPENSES'
        ? parseInt(expenses) + parseInt(amount)
        : parseInt(expenses)

    const inAmount =
      type === 'INCOME' ? parseInt(income) + parseInt(amount) : parseInt(income)

    const remainBalance = inAmount - exAmount

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      type: 'INCOME',
      expenses: exAmount,
      income: inAmount,
      balance: remainBalance,
    }))
  }

  onDelHistoryItem = id => {
    const {historyList, income, expenses} = this.state
    const historyItem = historyList.filter(eachItem => eachItem.id === id)
    const exAmount =
      historyItem[0].type === 'EXPENSES'
        ? parseInt(expenses) - parseInt(historyItem[0].amount)
        : parseInt(expenses)

    const inAmount =
      historyItem[0].type === 'INCOME'
        ? parseInt(income) - parseInt(historyItem[0].amount)
        : parseInt(income)

    const totalBalance = inAmount - exAmount

    const filteredList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({
      historyList: filteredList,
      expenses: exAmount,
      income: inAmount,
      balance: totalBalance,
    })
  }

  render() {
    const {
      title,
      amount,
      type,
      historyList,
      income,
      balance,
      expenses,
    } = this.state
    return (
      <div className="bg-container">
        <div className="money-man-card">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails income={income} balance={balance} expenses={expenses} />
        <div className="money-man-cont">
          <div className="add-transaction-card">
            <h1 className="head">Add Transaction</h1>
            <form onSubmit={this.addEventListener}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                value={title}
                type="text"
                placeholder="TITLE"
                className="add-trans"
                id="title"
                onChange={this.onTitleInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                value={amount}
                type="text"
                placeholder="AMOUNT"
                className="add-trans"
                id="amount"
                onChange={this.onAmount}
              />
              <label htmlFor="type">TYPE</label>
              <br />
              <select
                value={type}
                id="type"
                className="add-trans"
                onChange={this.selectedOption}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="add-transaction-card">
            <h1 className="head">History</h1>
            <ul className="un-list">
              <li className="money-man-cont-bor">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p> </p>
              </li>
              {historyList.map(eachList => (
                <TransactionItem
                  key={eachList.id}
                  historyItem={eachList}
                  onDelHistoryItem={this.onDelHistoryItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
