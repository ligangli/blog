(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一-创建3d场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-创建3d场景"}},[e._v("#")]),e._v(" 一: 创建3d场景")]),e._v(" "),t("p",[e._v("const scene = new THREE.Scene();\nconsole.log(scene);\n创建长方体对象\nconst geometry  = new THREE.BoxGeometry(20,20,20)\n创建材质对象\nconst material = new THREE.MeshBasicMaterial({\ncolor: '0xff0000'\n})")]),e._v(" "),t("h2",{attrs:{id:"物体-网格模型mesh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物体-网格模型mesh"}},[e._v("#")]),e._v(" 物体:网格模型mesh")]),e._v(" "),t("p",[e._v("const mesh = new THREE.Mesh(geometry,material)")]),e._v(" "),t("h2",{attrs:{id:"模型位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型位置"}},[e._v("#")]),e._v(" 模型位置")]),e._v(" "),t("p",[e._v("设置网格模型在三维空间中的位置坐标，默认是坐标原点\nmesh.position.set(100,10,0)")]),e._v(" "),t("h2",{attrs:{id:"add-把网格模型mesh添加到三维场景scene中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-把网格模型mesh添加到三维场景scene中"}},[e._v("#")]),e._v(" add 把网格模型mesh添加到三维场景scene中")]),e._v(" "),t("p",[e._v("scene.add(mesh)")]),e._v(" "),t("h2",{attrs:{id:"二-相机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-相机"}},[e._v("#")]),e._v(" 二:相机")]),e._v(" "),t("p",[e._v("三维场景scene渲染到web网页上,需要定义虚拟相机\nThreejs提供了正投影相机OrthographicCamera (opens new window)和透视投影相机PerspectiveCamera\n透视投影相机的四个参数fov, aspect, near, far构成一个四棱台3D空间，被称为视锥体，\n只有视锥体之内的物体，才会渲染出来，视锥体范围之外的物体不会显示在Canvas画布上")]),e._v(" "),t("p",[e._v("参数\t    含义\t                                                                         默认值\nfov\t    相机视锥体竖直方向视野角度                                                  \t    50\naspect\t相机视锥体水平方向和竖直方向长度比，一般设置为Canvas画布宽高比width / height\t        1\nnear\t    相机视锥体近裁截面相对相机距离\t                                                     0.1\nfar\t    相机视锥体远裁截面相对相机距离，far-near构成了视锥体高度方向\t                       2000")]),e._v(" "),t("h2",{attrs:{id:"三-定义相机渲染出画布尺寸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-定义相机渲染出画布尺寸"}},[e._v("#")]),e._v(" 三：定义相机渲染出画布尺寸")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("const width = 1000\nconst height = 800\n")])])]),t("p",[e._v("const camera = new THREE.PerspectiveCamera(30,width/height,1,3000);\ncamera.position.set(160,160,160) ## 相机位置")]),e._v(" "),t("h2",{attrs:{id:"相机观察目标lookat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相机观察目标lookat"}},[e._v("#")]),e._v(" 相机观察目标lookAt()")]),e._v(" "),t("p",[e._v("camera.lookAt(mesh.position)")]),e._v(" "),t("h2",{attrs:{id:"四-webgl渲染器webglrenderer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-webgl渲染器webglrenderer"}},[e._v("#")]),e._v(" 四：WebGL渲染器WebGLRenderer")]),e._v(" "),t("p",[e._v("const renderer = new THREE.WebGLRenderer()")]),e._v(" "),t("h2",{attrs:{id:"设置canvas画布尺寸-setsize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置canvas画布尺寸-setsize"}},[e._v("#")]),e._v(" 设置Canvas画布尺寸.setSize()")]),e._v(" "),t("p",[e._v("renderer.setSize(width,height)")]),e._v(" "),t("h2",{attrs:{id:"渲染器渲染方法-render"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染器渲染方法-render"}},[e._v("#")]),e._v(" 渲染器渲染方法.render()")]),e._v(" "),t("p",[e._v("renderer.render(scene,camera)")]),e._v(" "),t("h2",{attrs:{id:"渲染器canvas画布属性-domelement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染器canvas画布属性-domelement"}},[e._v("#")]),e._v(" 渲染器Canvas画布属性.domElement")]),e._v(" "),t("p",[e._v("document.getElementById('webgl').appendChild(renderer.domElement);\n"),t("img",{attrs:{src:"https://user-images.githubusercontent.com/22109943/225823201-dcb03d2a-c9c0-45ba-adfb-13c83f3271b4.png",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);