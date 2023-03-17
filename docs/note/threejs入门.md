 ## 一: 创建3d场景
const scene = new THREE.Scene();
console.log(scene);
创建长方体对象
const geometry  = new THREE.BoxGeometry(20,20,20)
创建材质对象
const material = new THREE.MeshBasicMaterial({
    color: '0xff0000'
})
物体:网格模型mesh
const mesh = new THREE.Mesh(geometry,material)
模型位置 
设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(100,10,0)
add 把网格模型mesh添加到三维场景scene中
scene.add(mesh)

## 二:相机
三维场景scene渲染到web网页上,需要定义虚拟相机
Threejs提供了正投影相机OrthographicCamera (opens new window)和透视投影相机PerspectiveCamera
透视投影相机的四个参数fov, aspect, near, far构成一个四棱台3D空间，被称为视锥体，
只有视锥体之内的物体，才会渲染出来，视锥体范围之外的物体不会显示在Canvas画布上

参数	    含义	                                                                         默认值
fov	    相机视锥体竖直方向视野角度                                                  	    50
aspect	相机视锥体水平方向和竖直方向长度比，一般设置为Canvas画布宽高比width / height	        1
near	    相机视锥体近裁截面相对相机距离	                                                     0.1
far	    相机视锥体远裁截面相对相机距离，far-near构成了视锥体高度方向	                       2000
    
## 三：定义相机渲染出画布尺寸
    const width = 1000
    const height = 800

const camera = new THREE.PerspectiveCamera(30,width/height,1,3000);
camera.position.set(160,160,160) ## 相机位置
相机观察目标lookAt()
camera.lookAt(mesh.position)

## 四：WebGL渲染器WebGLRenderer
const renderer = new THREE.WebGLRenderer()
设置Canvas画布尺寸.setSize()
renderer.setSize(width,height)
渲染器渲染方法.render()
renderer.render(scene,camera)
渲染器Canvas画布属性.domElement

document.getElementById('webgl').appendChild(renderer.domElement);
![image](https://user-images.githubusercontent.com/22109943/225823201-dcb03d2a-c9c0-45ba-adfb-13c83f3271b4.png)

