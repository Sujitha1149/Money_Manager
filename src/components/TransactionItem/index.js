import './index.css'

const TransactionItem = props => {
  const {historyItem, onDelHistoryItem} = props
  const {title, amount, type, id} = historyItem

  const onDelImgClick = () => {
    onDelHistoryItem(id)
  }

  return (
    <li className="money-man-cont-bor">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="del-img-cont"
        onClick={onDelImgClick}
        data-testid="delete"
      >
        <img
          className="del-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
