import React from 'react'
import "./assets/styles/index.css"
import Instagram from "./assets/images/instagram.svg"





const ResetPassword = () => {
    return (
        <section className="reset-form-section">
            <div className="reset-password-main">
                <div className="reset-password-container">
                    <div className="reset-password-form">
                        <div className="form">
                            <div className="inner-form">
                                <div className="reset-form-logo">
                                    <img className="reset-image" src={Instagram} alt=""/>
                                </div>
                                
                                
                                <div className="trouble-container">
                                    <p>Trouble Logging In</p>
                                </div>
                                
                                
                                <div className="reset-form-text">
                                    <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                                </div>
                                
                                
                                <div className="main-form-container">
                                    <form action="">
                                        <label htmlFor="">
                                            <input type="text" name="" id="" placeholder="Email, Phone, or Username"/>
                                        </label>
                                    </form>
                                </div>


                                <div className="btn-container">
                                    <button>
                                        Send Login Link
                                    </button>
                                </div>

                                <div className="or-container">
                                    <div className="inner-or">
                                        <div className="line"></div>
                                        <div className="main-or">
                                            or
                                        </div>
                                        <div className="line">

                                        </div>
                                    </div>
                                </div>
                                

                                <div className="reset-form-new-account-link">
                                    <a href="">Create New Account</a>
                                </div>

                                <div className="back-to-login-container">
                                    <div className="back-to-login">
                                        <a href="">Back To Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            </div>

            <footer>
                <div className="first-footer">
                    <div className="second-footer">
                        <div className="third-footer">
                            <div className="footer-link-container ">
                                <a href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">About</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://about.instagram.com/blog/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Blog</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="/about/jobs/">
                                    <div className="">Jobs</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Help</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">API</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Privacy</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Terms</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Top Accounts</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="/directory/hashtags/">
                                    <div className="">Hashtags</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="/explore/locations/">
                                    <div className="">Locations</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="select-main">
                        <div className="select-container">
                            <span className="select-span">
                                <div className="select-div">
                                    <span>English</span>
                                    <div className="           ">
                                        <span style={{display: "inline-block", transform: "rotate(180deg)"}}>
                                            <svg aria-label="Down Chevron Icon" className="_8-yf5 " fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <select aria-label="Switch Display Language" className="select-select">
                                    <option value="af">Afrikaans</option>
                                    <option value="cs">Čeština</option>
                                    <option value="da">Dansk</option>
                                    <option value="de">Deutsch</option>
                                    <option value="el">Ελληνικά</option>
                                    <option value="en">English</option>
                                    <option value="en-gb">English (UK)</option>
                                    <option value="es">Español (España)</option>
                                    <option value="es-la">Español</option>
                                    <option value="fi">Suomi</option>
                                    <option value="fr">Français</option>
                                    <option value="id">Bahasa Indonesia</option>
                                    <option value="it">Italiano</option>
                                    <option value="ja">日本語</option>
                                    <option value="ko">한국어</option>
                                    <option value="ms">Bahasa Melayu</option>
                                    <option value="nb">Norsk</option>
                                    <option value="nl">Nederlands</option>
                                    <option value="pl">Polski</option>
                                    <option value="pt-br">Português (Brasil)</option>
                                    <option value="pt">Português (Portugal)</option>
                                    <option value="ru">Русский</option>
                                    <option value="sv">Svenska</option>
                                    <option value="th">ภาษาไทย</option>
                                    <option value="tl">Filipino</option>
                                    <option value="tr">Türkçe</option>
                                    <option value="zh-cn">中文(简体)</option>
                                    <option value="zh-tw">中文(台灣)</option>
                                    <option value="bn">বাংলা</option>
                                    <option value="gu">ગુજરાતી</option>
                                    <option value="hi">हिन्दी</option>
                                    <option value="hr">Hrvatski</option>
                                    <option value="hu">Magyar</option>
                                    <option value="kn">ಕನ್ನಡ</option>
                                    <option value="ml">മലയാളം</option>
                                    <option value="mr">मराठी</option>
                                    <option value="ne">नेपाली</option>
                                    <option value="pa">ਪੰਜਾਬੀ</option>
                                    <option value="si">සිංහල</option>
                                    <option value="sk">Slovenčina</option>
                                    <option value="ta">தமிழ்</option>
                                    <option value="te">తెలుగు</option>
                                    <option value="vi">Tiếng Việt</option>
                                    <option value="zh-hk">中文(香港)</option>
                                    <option value="bg">Български</option>
                                    <option value="fr-ca">Français (Canada)</option>
                                    <option value="ro">Română</option>
                                    <option value="sr">Српски</option>
                                    <option value="uk">Українська</option>
                                </select>
                            </span>
                        </div>
                        <div className="footer-tag">
                            <div className="main-footer-tag">© 2021 Instagram from Facebook</div>
                        </div>
                    </div>
                    </div>
                </footer>
        </section>
    )
}

export default ResetPassword


