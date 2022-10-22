import { useState, useEffect } from 'react'
import axios from 'axios'
const { NEXT_PUBLIC_CONTACT_URL } = process.env;

interface ContactRequest {
    name: string,
    email: string,
    reference: string,
    body: string,
    onSuccess: () => void
    onError: () => void
}

export const useSubmitContactRequest = ({ 
    name, 
    email, 
    reference,
    body,
    onSuccess,
    onError
}: ContactRequest) => {

    const [nameTouched, setNameTouched] = useState(false)
    const [nameValid, setNameValid] = useState(false)
    const [emailTouched, setEmailTouched] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [referenceTouched, setReferenceTouched] = useState(false)
    const [referenceValid, setReferenceValid] = useState(false)
    const [bodyTouched, setBodyTouched] = useState(false)
    const [bodyValid, setBodyValid] = useState(false)
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if(name === '' && !nameTouched) return;
        setTimeout(() => {
            setNameTouched(true)
            setNameValid(name.length > 0)
        },500)
    },[name])
    useEffect(() => {
        if(email === '' && !emailTouched) return;
        setTimeout(() => {
            setEmailTouched(true)
            setEmailValid(email.includes('@' && '.'))
        },500)
    },[email])
    useEffect(() => {
        if(reference === '' && !referenceTouched) return;
        setTimeout(() => {
            setReferenceTouched(true)
            setReferenceValid(reference.length > 0)
        },500)
    },[reference])
    useEffect(() => {
        if(body === '' && !bodyTouched) return;
        setTimeout(() => {
            setBodyTouched(true)
            setBodyValid(body.length > 10)
        },500)
    },[body])

    useEffect(() => {
        setValid(nameValid && emailValid && referenceValid && bodyValid)
    },[nameValid, emailValid, referenceValid, bodyValid])

    const reset = () => {
        setNameTouched(false)
        setNameValid(false)
        setEmailTouched(false)
        setEmailValid(false)
        setReferenceTouched(false)
        setReferenceValid(false)
        setBodyTouched(false)
        setBodyValid(false)
    }

    const submitRequest = async () => {
        if(!valid) return;
        try{
            setLoading(true)
            const res = await axios.post(NEXT_PUBLIC_CONTACT_URL!, {
                name, email, reference, body
            })
            reset()
            setLoading(false)
            setSuccess(true)
            setError(false)
            onSuccess()
            return res;
        }catch(err){
            console.error(err)
            setLoading(false)
            setError(true)
            onError()
        }
    }

    return { 
        nameTouched,
        nameValid,
        emailTouched,
        emailValid,
        referenceTouched,
        referenceValid,
        bodyTouched,
        bodyValid,
        valid,
        loading,
        success,
        error,
        submitRequest
    };
}