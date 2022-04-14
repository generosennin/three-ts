import * as Three from 'three'

const renderer = new Three.WebGL1Renderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new Three.Scene();
const geometory = new Three.BoxGeometry();
const material = new Three.MeshBasicMaterial(
    {color: 0xff0000, wireframe: true}
)

const mesh = new Three.Mesh(geometory, material)
scene.add(mesh)

const camera = new Three.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 100
)

camera.position.set(0,0,-3)
camera.lookAt(mesh.position)
const clock = new Three.Clock()
window.addEventListener('resize', () => {
    //const windowHalfX = window.innerWidth / 2
    //const windowHalfY = window.innerHeight / 2
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}, false)

let dir = -1
const animate = () => {
    requestAnimationFrame(animate)
    const delta = clock.getDelta()
    mesh.rotation.x += delta * 0.5
    mesh.rotation.y += delta * 2
    mesh.position.x += dir * delta
    if(mesh.position.x > 2){
        dir = -1
    } else if(mesh.position.x < -2){
        dir = 1
    }
    renderer.render(scene, camera)
}
animate()