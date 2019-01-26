import React from 'react'
import PropTypes from 'prop-types'

import sharevelLogo from '../images/sharevel-logo.png'
import sharevelVpc from '../images/sharevel-vpc.png'
import winkryLogo from '../images/winkry-logo.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3 className="major">Sharevel</h3>
          <span className="image main"><img src={sharevelLogo} alt="" /></span>
          <p>Sharevel(シェアベル)は旅の計画と共有を手助けするアプリです。</p>
<a href="https://itunes.apple.com/us/app/sharevel/id1448076297?mt=8" style={{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-01-10&kind=iossoftware&bubble=ios_apps) no-repeat",width:"135px",height:"40px"}}></a>
<h3>開発背景</h3>
          <p>このアプリケーションは旅をテーマにしたアイデアソンを通して生まれました。チームには子育てをする人もいて、子育ては忙しく、旅の計画を立てるにも十分な時間が割けないこと。旅行先では病院の情報やトイレの情報を得るにもとても手間がかかる現状がありました。もし自由に情報を交換できるアプリがあれば。。こういった背景でSharevelを開発しました。</p>
          <span className="image main" style={{background: "#FFF"}}><img src={sharevelVpc} alg="" /></span>
          <p>Sharevelには旅のスケジュールの登録、思い出の写真も登録できます。また、Evernoteを通して旅の計画をSNSに発信できます。個人が旅を共有することを手助けできます。旅行サイトには乗っていない病院の情報やサービスエリアのトイレの情報また持っていくと良いものなど行った人にしかわからないことを発信できます。</p>
          <p>Sharevelが皆さんの楽しい思い出を残すことに役立てることができれば幸いです。</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={winkryLogo} alt="" /></span>
          <p>Winkryはサービスクリエーションを通して人々の思い出づくりを支援する団体です。</p>
          <h3 className="major">名前の由来</h3>
          <p>Winkryの由来は日々草(英名:Madagascar periwinkle)という花で、花言葉は「楽しい思い出」です。日日草のperiwinkleと物語のstoryを組み合わせてWinkryです。楽しい思い出を作り、物語を紡いでいく思いが込められています。</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h3 className="major">Mail address</h3>
          <p>sharevel.winkry"@"gmail.com<br/>
          送信時に"を削除してください。</p>
          {close}
          <h3 className="major">Members</h3>
          <ul className="members">
            <ul className="icons">
              <li>dyson-yamashita <a href="https://github.com/dyson-yamashita" className="icon fa-github"><span className="label">G
itHub</span></a></li>
            </ul>
          </ul>
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
