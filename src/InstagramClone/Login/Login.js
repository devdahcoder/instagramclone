import React from "react"
import "./assets/styles/styles.css"
import FaceBookButton from "../FaceBookButton/FaceBookButton"
import Google from "./assets/images/e9cd846dc748.png"
import Apple from "./assets/images/180ae7a0bcf7.png"

const Login = () => {
    return (
        <section className="login-section">
            <main className="login-main">
                <article className="login-container">
                    <div className="login-img-slider">
                        {/* <div className="main-slider">
                            <img src="" alt="" className="main-img"/>
                            <img src="" alt="" className="main-img"/>
                            <img src="" alt="" className="main-img"/>
                        </div> */}
                        <div class="main-slider"><img class="RP4i1  " src="/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt="" /><img class="RP4i1  UVauz" src="/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt="" /><img class="RP4i1 JtrJi " src="/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" alt="" /><img class="RP4i1  " src="/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" alt="" /><img class="RP4i1  " src="/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt="" /></div>
                    </div>

                    <div className="login-form">
                        <div className="login-form-container">
                            <div className="header-form">
                                
                            </div>

                            <div className="form-input">
                                <form action="">
                                    <div className="form-div">
                                        <div className="form-input-container">
                                            <div className="login-form-input">
                                                <label class="login-label ">
                                                    <span class="_9nyy2">Phone number, username, or email</span>
                                                    <input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="75" name="username" type="text" class="_2hvTZ pexuQ zyHYP" value="" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-input-container">
                                            <div className="login-form-input">
                                            <label class="login-label ">
                                                <span class="_9nyy2">Password</span>
                                                <input aria-label="Password" aria-required="true" autocapitalize="off" autocorrect="off" name="password" type="password" class="_2hvTZ pexuQ zyHYP" value="" />
                                            </label>
                                            </div>
                                        </div>

                                        <div className="login-btn-container">
                                            <button>
                                                Log In
                                            </button>
                                        </div>

                                        <div className="or-container">
                                            <div className="line">
                                                
                                            </div>
                                            <div className="main-or">
                                                OR
                                            </div>
                                            <div className="line">

                                            </div>
                                        </div>

                                        <div className="fb-btn">
                                            <FaceBookButton />
                                        </div>


                                    </div>

                                    <a className="login-forget-password-link" href="/accounts/password/reset/" tabindex="0">Forgot password?</a>
                                </form>
                            </div>
                        </div>

                        <div className="login-sign-up-link-container">
                            <div className="login-sign-up-link">
                                <p class="izU2O ">Don't have an account? <a href="/accounts/emailsignup/" tabindex="0"><span class="_7UhW9   xLCgt       qyrsm      gtFbE      se6yk        ">Sign up</span></a></p>
                            </div>
                        </div>
                        <div className="app-link-container">
                            <p class="app-link-header">Get the app.</p>

                            <div className="app-link">
                                <a class="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"><img alt="Available on the App Store" class="Rt8TI " src={Apple} /></a>

                                <a class="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D4D0BC0AC-FACF-4FE7-BC6C-69A6379DE31A%26utm_content%3Dlo%26utm_medium%3Dbadge"><img alt="Available on Google Play" class="Rt8TI " src={Google} /></a>
                            </div>
                        </div>
                    </div>









                </article>
            </main>

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

                        <div className="third-footer">
                            <div className="footer-link-container ">
                                <a href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Beauty</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://about.instagram.com/blog/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Dance & Performance</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="/about/jobs/">
                                    <div className="">Fitness</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Food & Drink</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Home & Garden</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Music</div>
                                </a>
                            </div>
                            <div className="footer-link-container ">
                                <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">
                                    <div className="">Visual Art</div>
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

export default Login
