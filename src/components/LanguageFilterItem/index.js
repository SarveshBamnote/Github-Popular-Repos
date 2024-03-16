import './index.css'

const LanguageFilterItem = props => {
  const {eachLang, getActiveLangId, isActive} = props
  const {id, language} = eachLang

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguage = () => {
    getActiveLangId(id)
  }

  return (
    <li>
      <button className={btnClassName} onClick={onClickLanguage} type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
