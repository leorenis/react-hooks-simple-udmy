import React from 'react'

const seasonConfig = {
  summer: {
    name: 'Summer',
    text: 'Oooh, so good to sleeping!',
    iconName: 'sun'
  },
  winter: {
    name: 'Winter',
    text: 'Huumm, Lets go to the beach.',
    iconName: 'snowflake'
  }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? seasonConfig.summer : seasonConfig.winter
  return lat > 0 ? seasonConfig.winter : seasonConfig.summer
}

const Display = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth())
  return (
    <div className={'ui cards'}>
      <div className={'card'}>
        <div className={'content'}>
          <div className={'header'}>Position</div>
          <div className={'meta'}>
            Latitude says your season is:
            <span className={'ui blue tag label'}>{season.name}</span>
          </div>
          <div className={'ui pointing green basic label'}>{latitude}</div>
          <div className={'description'}>{season.text}.</div>
        </div>
      </div>
    </div>
  )
}

export default Display
