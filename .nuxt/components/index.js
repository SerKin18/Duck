export { default as App } from '../..\\components\\App.vue'
export { default as Footer } from '../..\\components\\footer\\Footer.vue'
export { default as FooterItem } from '../..\\components\\footer\\FooterItem.vue'
export { default as ButtonCalcButton } from '../..\\components\\button\\CalcButton.vue'
export { default as ButtonClassicButton } from '../..\\components\\button\\ClassicButton.vue'
export { default as ButtonMainButton } from '../..\\components\\button\\MainButton.vue'
export { default as ButtonMainButtonBlack } from '../..\\components\\button\\MainButtonBlack.vue'
export { default as ButtonServiceButton } from '../..\\components\\button\\ServiceButton.vue'
export { default as ButtonStarsRating } from '../..\\components\\button\\StarsRating.vue'
export { default as Header } from '../..\\components\\header\\Header.vue'
export { default as MainBanner } from '../..\\components\\main\\Banner.vue'
export { default as MainCalc } from '../..\\components\\main\\Calc.vue'
export { default as MainCalcCheckboxItem } from '../..\\components\\main\\CalcCheckboxItem.vue'
export { default as MainCalcCheckboxLineItem } from '../..\\components\\main\\CalcCheckboxLineItem.vue'
export { default as MainCalckCheckBoxLine } from '../..\\components\\main\\CalckCheckBoxLine.vue'
export { default as MainCalckCheckBoxLine2 } from '../..\\components\\main\\CalckCheckBoxLine2.vue'
export { default as MainCalckCheckBoxLine3 } from '../..\\components\\main\\CalckCheckBoxLine3.vue'
export { default as MainContacts } from '../..\\components\\main\\Contacts.vue'
export { default as MainContactsBlock } from '../..\\components\\main\\ContactsBlock.vue'
export { default as MainFQS } from '../..\\components\\main\\FQS.vue'
export { default as MainFQSItem } from '../..\\components\\main\\FQSItem.vue'
export { default as Main } from '../..\\components\\main\\Main.vue'
export { default as MainModal } from '../..\\components\\main\\Modal.vue'
export { default as MainModalOrder } from '../..\\components\\main\\ModalOrder.vue'
export { default as MainPortfolio } from '../..\\components\\main\\Portfolio.vue'
export { default as MainPortfolioItem } from '../..\\components\\main\\PortfolioItem.vue'
export { default as MainRadio } from '../..\\components\\main\\Radio.vue'
export { default as MainRadioItem } from '../..\\components\\main\\RadioItem.vue'
export { default as MainReviews } from '../..\\components\\main\\Reviews.vue'
export { default as MainReviewsItem } from '../..\\components\\main\\ReviewsItem.vue'
export { default as MainService } from '../..\\components\\main\\Service.vue'
export { default as MainServiceItem } from '../..\\components\\main\\ServiceItem.vue'
export { default as MainTickers } from '../..\\components\\main\\Tickers.vue'
export { default as MainWhyUs } from '../..\\components\\main\\WhyUs.vue'
export { default as MainWhyUsItem } from '../..\\components\\main\\WhyUsItem.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
