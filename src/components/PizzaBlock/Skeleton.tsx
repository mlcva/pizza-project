import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="137" cy="135" r="125" />
    <rect x="0" y="277" rx="10" ry="10" width="280" height="25" />
    <rect x="2" y="319" rx="10" ry="10" width="280" height="88" />
    <rect x="5" y="428" rx="10" ry="10" width="95" height="30" />
    <rect x="127" y="422" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
