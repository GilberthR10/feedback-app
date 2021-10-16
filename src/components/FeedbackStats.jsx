import PropTypes from 'prop-types'
function FeedbackStats({ feedback }) {

    //calculate rating average
    let average = feedback.length && feedback.reduce((total, item) => total + item.rating, 0) / feedback.length;
  return (
    <div className="feedback-stats">
        <h4>{ feedback.length }</h4>
        <h4>Average Rating: {average}</h4>
    </div>
  )
}

FeedbackStats.prototype = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats