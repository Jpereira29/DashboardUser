import axios from "axios"
import { useEffect, useState } from "react"
import { Midea } from "../types/Midea"

export function useDataUser<T = unknown>(url: string) {
    const [user, setUser] = useState<T | null>(null)

    const getUser = async ()=> {
        try {
            const response = await axios.get(url)

            const data = await response.data
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getUser()
    }, [])

    return { user }
}

export function useDataProjects<T = unknown>(url: string) {
    const [projects, setProjects] = useState<T[] | null>(null)

    const getProjects = async ()=> {
        try {
            const response = await axios.get(url)

            const data = await response.data
            setProjects(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getProjects()
    }, [])

    return { projects }
}


export function useDataMideas<T = unknown>(url: string) {
    const [mideas, setMideas] = useState<T[] | null>(null)
    const [newMidea, setNewMidea] = useState<Midea>()

    const getMideas = async ()=> {
        try {
            const response = await axios.get(url)

            const data = await response.data
            setMideas(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getMideas()
    }, [mideas])

    const postMideas = async (midea: Midea | undefined)=> {
        try {
            const request = await axios.post(url, midea)
            const response = await request.data
            setMideas(response)

        } catch (error) {
            console.log(error)
        }
    }

    return { setMideas, mideas, postMideas, setNewMidea, newMidea }
}