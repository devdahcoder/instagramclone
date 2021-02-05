import React from "react"
import "./assets/styles/index.css"
import Logo from "./assets/images/logo.png"
import Google from "./assets/images/180ae7a0bcf7.png"
import Apple from "./assets/images/e9cd846dc748.png"
import FaceBookButton from "../FaceBookButton/FaceBookButton"
const SignUp = () => {
    return (
        <section className="sign-up-section">
            <div className="sign-up-container">
                <div className="sign-up-main">
                    <div className="sign-up-form-container">
                        <div className="sign-up-form">
                            <div className="sign-up-div">
                                <div className="sign-up-form-logo">
                                    <img src={Logo} alt=""/>
                                </div>

                                <div className="main-form-div">
                                    <form action="">
                                        <div className="sign-up-form-form-header">
                                            <p>Sign up to see photos and videos from your friends</p>
                                        </div>
                                        <FaceBookButton />

                                        <div className="or-container">
                                            <div className="inner-or">
                                                <div className="line"></div>
                                                <div className="main-or">
                                                    or
                                                </div>
                                                <div className="line"></div>

                                            </div>
                                        </div>

                                        <div className="sign-up-form-input">
                                            <div className="sign-up-inner-input">
                                                <label htmlFor="">
                                                    <span class="_9nyy2">Mobile Number or Email</span>
                                                    <input type="text" name="" id="" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sign-up-form-input">
                                            <div className="sign-up-inner-input">
                                                <label htmlFor="">
                                                    <span class="_9nyy2">Full Name</span>
                                                    <input type="text" name="" id=""/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sign-up-form-input">
                                            <div className="sign-up-inner-input">
                                                <label htmlFor="">
                                                    <span class="_9nyy2">Username</span>
                                                    <input type="text" name="" id=""/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sign-up-form-input">
                                            <div className="sign-up-inner-input">
                                                <label htmlFor="">
                                                    <span class="_9nyy2">Password</span>
                                                    <input type="password" name="" id=""/>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="sign-up-btn-container">
                                            <button>Sign up</button>
                                        </div>
                                        

                                        <p class="bottom-p">By signing up, you agree to our <a target="_blank" href="https://help.instagram.com/581066165581870" tabindex="0">Terms</a> , <a target="_blank" href="https://help.instagram.com/519522125107875" tabindex="0">Data Policy</a> and <a target="_blank" href="/legal/cookies/" tabindex="0">Cookies Policy</a> .</p>
                                        
                                    
                                    </form>
                                </div>
                            </div>

                        </div>

                        <div className="sign-up-account-login">
                            <p class="izU2O ">Have an account? <a href="/accounts/login/?source=auth_switcher" tabindex="0">Log in</a></p>
                        </div>
                        <div className="app-store-link-container">
                            <p class="b_nGN">Get the app.</p>
                            <div class="iny2t">
                                <a class="z1VUo first" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo">
                                    <img alt="Available on the App Store" class="Rt8TI " src={Apple} />

                                </a>
                                <a class="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D681AB5CD-A390-49CA-9089-CC337CD134E4%26utm_content%3Dlo%26utm_medium%3Dbadge">
                                    <img alt="Available on Google Play" class="Rt8TI " src={Google} />

                                </a>
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

export default SignUp
