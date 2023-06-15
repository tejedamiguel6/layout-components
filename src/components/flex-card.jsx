import styled from './flexcard.module.scss'
import classnames from 'classnames'

const FlexCard = ({ items, layout }) => {
  const hasImages = items.some((item) => item.imageUrl)
  // using class names library
  const containerClass = classnames(styled.container, {
    [styled.miniCardModule]: layout === 'miniCardModule',
    [styled.cardModuleSmall]: layout === 'cardModuleSmall' && !hasImages,
    [styled.cardModuleMedium]: layout === 'cardModuleMedium',
    [styled.largeCardModule]: layout === 'largeCardModule' && hasImages,
  })

  return (
    <div className={styled.parentContainer}>
      <div className={containerClass}>
        {items.map((item, index) => {
          const itemClass = `${styled.item}`
          // I need dynamic styles for when there is no image the text should
          // take up the entire width of the container, and if there is img,
          // text should take up 70% and img 30% This should be in the map
          // function because the items with no image will be different than
          // the items with images
          const textContainerClass = classnames(styled.containerText, {
            [styled.withImage]: item.imageUrl,
            [styled.withoutImage]: !item.imageUrl,
          })

          const imageContainerClass = classnames(styled.containerImage, {
            [styled.miniCardIcons]: items.length === 8,
            [styled.iconAboveTitle]: items.length === 8,
          })
          return (
            <div key={index} className={itemClass}>
              {item.imageUrl && (
                <div className={imageContainerClass}>
                  <img
                    className={styled.cardImage}
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
              )}
              <div className={styled.topHeader}></div>
              <div className={textContainerClass}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className={styled.buttonLink}>
                  <a to={item.link}>
                    <p>More Info</p>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FlexCard
