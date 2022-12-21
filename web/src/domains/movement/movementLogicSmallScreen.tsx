/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { Suspense, useEffect, useMemo, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { GLTF, SkeletonUtils } from "three-stdlib"
import { AnimationClip, Group } from "three"
import { useFrame, useGraph } from "@react-three/fiber"
import { framePositions, movObject, useMovementStore } from "./useMovementStore"
import { Person } from "./person"
import { render } from "react-dom"
import { ObjectType } from "cgv/domains/movement"
import { Cyclist } from "./cyclist"
import { Truck } from "./truck"
import { getExtraData } from "./objectDataScene"
import { WorldState, WorldEnum } from "./movementData"

export default function MovementLogicSmallScreen(props: {
    data: framePositions | null
    id: string
    world: WorldState
    type: ObjectType
}) {
    const object = useRef<any>()
    const data = props.data

    const scene = props.world.enumName as WorldEnum
    const type = props.type

    const [lineOffsetX, lineOffsetY, lineLength, textMarginX, textMarginY, positionY, rotationY, scale] = getExtraData(
        scene,
        type
    )
    const PersonComp = useMemo(() => {
        switch (type) {
            case ObjectType.Cyclist:
                return <Cyclist key={props.id} id={props.id} ref={object} scale={scale} positionY={positionY}></Cyclist>
            case ObjectType.Pedestrian:
                return <Person key={props.id} id={props.id} ref={object} scale={scale} positionY={positionY}></Person>
            case ObjectType.Car:
                return <Truck key={props.id} id={props.id} ref={object} scale={scale} positionY={positionY}></Truck>
            default:
                return <Person key={props.id} id={props.id} ref={object} scale={scale} positionY={positionY}></Person>
        }
    }, [props])

    useEffect(() => {
        if (data) {
            const position = data.position as number[]
            const direction = data.direction as number[]
            if (type===ObjectType.Car) {
                object.current.updatePosition(
                    position[0],
                    position[1],
                    position[2],
                    -Math.atan2(direction[2], direction[0]) + Math.PI,
                    Math.round(Math.random() * 500)
                )
            } else {
                object.current.updatePosition(
                    position[0],
                    position[1],
                    position[2],
                    -Math.atan2(direction[2], direction[0]) + Math.PI / 2,
                    Math.round(Math.random() * 500)
                )
            }
        }
    }, [object, props])

    return (
        <>
            <Suspense fallback={null}>{PersonComp}</Suspense>
        </>
    )
}
