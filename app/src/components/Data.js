import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import {fetchAPI} from '../actions'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {
    Card, CardImg, Col
  } from 'reactstrap';

const Data = props => { 
    useEffect(() => { 
        props.fetchAPI()
    }, [])



    return (
        
        <div>
        {props.isLoading && <Loader  type="Rings" color="#00BFFF" height={80} width={80}/>}
        <Col sm="12"> <Card body outline color="primary">
          <CardImg top width="50%"  src={props.apiData} alt="doggo" />
          
        </Card>
        </Col>
      </div>
        
      
        
        
    )
}

const mapStateToProps = state => { 
    {console.log(state, "right?")}
    return { 
    apiData: state.apiData,
    isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps,{fetchAPI})(Data)