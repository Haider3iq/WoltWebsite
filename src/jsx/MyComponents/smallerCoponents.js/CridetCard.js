import React, { useEffect,useState } from "react";





export default function CridetCardComponent ({setInfo, info,}) {

    const [cardName, setCardName] = useState("")
    const [cardDayDate, setCardDayDate] = useState("")
    const [cardMonthDate, setCardMonthDate] = useState("")
    const [cardCVV, setCardCVV] = useState("")
    const [cardNumber, setCardNumber] = useState("")






    return(
      <div className="paymentInfo">
        <div className="payment__cc">
          {/* <div className="payment__title">
            <i className="icon icon-user"></i>Cridet card info
          </div> */}
          <form>
            <div className="form__cc">
              <div className="row">
                <div className="field">
                  <div className="cridetCardTitle">Credit Card Number
                  </div>
                  <input maxLength={17} type={"text"} onKeyUp={it => setCardNumber(it)} max="3" className="input txt" placeholder="4542 9931 9292 2293"/>
                </div>
              </div>
              <div className="row">
                <div className="field small">
                  <div className="cridetCardTitle">Expiry Date
                  </div>
                  <select 
                  className="input ddl">
                    <option  selected>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select className="input ddl">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option selected>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div className="field small">
                  <div className="cridetCardTitle">CVV Code
                    <span className="numberCircle">?</span>
                  </div>
                  <input onKeyUp={it => setCardCVV(it.target.value)} type={"text"} max="3" className="input txt" placeholder="123" maxLength={3}/>
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <div className="cridetCardTitle">Name on Card
                  </div>
                  <input onKeyUp={it => setCardName(it.target.value)} maxLength={26} type={"text"} max="3" className="input txt"placeholder="JOHN DEAP" />
                </div>
              </div>

            </div>
          </form>
          </div>
          </div>
    )
  }