import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props

  return (
    <div className="bg-cont">
      <div className="money-det-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-det-pic"
        />
        <div>
          <p className="para">Your Balance</p>
          <p className="head" data-testid="balanceAmount">
            RS <span>{balance}</span>
          </p>
        </div>
      </div>
      <div className="money-det-card a2-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-det-pic"
        />
        <div>
          <p className="para">Your Income</p>
          <p className="head" data-testid="incomeAmount">
            RS <span>{income}</span>
          </p>
        </div>
      </div>
      <div className="money-det-card a3-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="money-det-pic"
        />
        <div>
          <p className="para">Your Expenses</p>
          <p className="head" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
