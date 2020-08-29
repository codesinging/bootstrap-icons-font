<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bd-navbar">
            <div class="container">
                <a class="navbar-brand h1 mb-0 d-inline-flex align-items-center" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 118 94" role="img">
                        <title>{{ libName }}</title>
                        <path
                            fill-rule="evenodd" clip-rule="evenodd"
                            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                            fill="currentColor"></path>
                    </svg>
                    <span class="d-inline-block ml-2">Bootstrap Icons Font</span>
                </a>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#install">Install</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#usage">Usage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#icons">Icons</a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" :href="repo" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title>
                                <path fill="currentColor" fill-rule="evenodd"
                                      d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container mt-3 pt-3">
            <div class="jumbotron jumbotron-fluid text-center banner-bg">
                <div class="container">
                    <h1 class="display-4">Bootstrap Icons Font</h1>
                    <p class="lead">{{ description }}</p>
                    <p>
                        Bootstrap Icons Font currently
                        <span class="badge badge-secondary">v{{ version }}</span> ,
                        has <span class="badge badge-secondary">{{ icons.length }}</span> icons,
                        built from Bootstrap Icons <span class="badge badge-secondary">v{{ srcVersion }}</span>.
                    </p>
                    <div class="mt-5">
                        <a href="#install" class="btn btn-success w-25">
                            Install
                        </a>
                        <a :href="download" class="btn btn-info ml-3 w-25">
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <a name="install"></a>
        <div class="container mt-5">
            <h3 class="border-bottom pb-3">Install</h3>

            <div class="pt-3">
                <p>Bootstrap Icons Font is published to npm, you can install it via command line.</p>
                <p class="h6">Install Bootstrap Icons Font with npm:</p>
                <p class="code-previewer">
                    npm install bootstrap-icons-font
                </p>
                <p class="h6">Install Bootstrap Icons Font with yarn:</p>
                <p class="code-previewer">
                    yarn add bootstrap-icons-font
                </p>
                <p class="h6">You can also download the compiled css and font files:</p>
                <p>
                    <a class="btn btn-info" target="_blank" :href="download">Download</a>
                </p>
            </div>
        </div>

        <a name="usage"></a>
        <div class="container mt-5">
            <h3 class="border-bottom pb-3">Usage</h3>

            <div class="mt-3">
                <div class="h5">Basic Icons</div>
                <p>
                    The Bootstrap Icons Font is designed to be used with inline elements, <code>i</code> and <code>span</code> are recommended.
                </p>
                <div class="d-flex align-items-center py-2 px-3 bg-light">
                    <i class="bi-gear"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-gear"&gt;&lt;/i&gt;</code>
                </div>
                <div class="d-flex align-items-center py-2 mt-2 px-3 bg-light">
                    <span class="bi-gear-fill"></span>
                    <code class="d-inline-block ml-3">&lt;span class="bi-gear-fill"&gt;&lt;/span&gt;</code>
                </div>
            </div>

            <div class="mt-3">
                <div class="h5">Icon Sizes</div>

                <h6>We provide some useful utilities to set font sizes.</h6>
                <div v-for="(value, key) in {xs:0.5, sm:0.75, md:1, lg:1.25, xl:1.5, '2xl':2, '3xl':2.5, '4xl':3, '5xl':3.5, '6xl':4, '7xl':4.5, '8xl':5}" :key="key" class="d-flex align-items-center mb-2 code-previewer">
                    <i class="bi-gear-fill" :class="['bi--'+key]"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-gear-fill bi--{{ key }}"&gt;&lt;/i&gt;</code>
                    <span class="d-inline-block ml-3 text-muted small">// font-size: {{value}}em</span>
                </div>
            </div>

            <div class="mt-3">
                <div class="h5">Animated Icons</div>

                <p>
                    You can use the <code>bi--spin</code> class to get any icon to rotate.
                </p>
                <p class="d-flex align-items-center code-previewer">
                    <i class="bi-gear bi--spin"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-gear bi--spin"&gt;&lt;/i&gt;</code>
                </p>
                <p class="d-flex align-items-center code-previewer">
                    <i class="bi-download bi--spin"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-download bi--spin"&gt;&lt;/i&gt;</code>
                </p>
            </div>

            <div class="mt-3">
                <div class="h5">Rotated Icons</div>

                <p>
                    You can use the <code>bi--rotate-*</code> class to rotate icons.
                </p>
                <p class="d-flex align-items-center code-previewer">
                    <i class="bi-bootstrap"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-bootstrap"&gt;&lt;/i&gt;</code>
                </p>
                <p v-for="deg in [45,90,135,180,225,270,315]" :key="deg" class="d-flex align-items-center code-previewer">
                    <i class="bi-bootstrap" :class="['bi--rotate-'+deg]"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-bootstrap bi--rotate-{{ deg }}"&gt;&lt;/i&gt;</code>
                </p>
            </div>

            <div class="mt-3">
                <div class="h5">Flipped Icons</div>

                <p>
                    You can use the <code>bi--flip-*</code> class to flip icons.
                </p>
                <p class="d-flex align-items-center code-previewer">
                    <i class="bi-bootstrap"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-bootstrap"&gt;&lt;/i&gt;</code>
                </p>
                <p class="d-flex align-items-center code-previewer">
                    <i class="bi-bootstrap bi--flip-horizontal"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-bootstrap bi--flip-horizontal"&gt;&lt;/i&gt;</code>
                </p>
                <p class="d-flex align-items-center code-previewer">
                    <i class="bi-bootstrap bi--flip-vertical"></i>
                    <code class="d-inline-block ml-3">&lt;i class="bi-bootstrap bi--flip-vertical"&gt;&lt;/i&gt;</code>
                </p>
            </div>

        </div>

        <a name="icons"></a>
        <div class="container mt-5">
            <div class="d-flex justify-content-between border-bottom">
                <h3>Icons</h3>
                <div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="iconFilter">.bi-</span>
                        </div>
                        <input v-model="filterName" type="text" class="form-control" placeholder="Typing name to filter" aria-label="iconName" aria-describedby="iconFilter">
                    </div>
                </div>
            </div>

            <div class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 text-center">
                <div class="col icons-item mt-4" v-for="(icon,index) in lists" :key="index">
                    <div class="icons-item-icon bg-light px-3 py-4"><i :class="[icon]"></i></div>
                    <div class="icons-item-name py-2 text-muted">{{ icon }}</div>
                </div>
            </div>
        </div>

        <div class="container mt-5 text-center mb-3">
            <div class="mt-3 border-top pt-3">
                <a :href="homepage" target="_blank">{{ libName}}</a> v{{ version }} <a :href="repo">Github</a>
            </div>
            <div class="small text-muted">
                Built by <a :href="authGithub">{{ author }}</a>,
                generated by <a href="https://icomoon.io/">IcoMoon</a>,
                based on <a href="https://icons.getbootstrap.com">Bootstrap Icons</a> v{{ srcVersion }}
            </div>
        </div>

    </div>
</template>

<script>
import icons from '../icons'
import {version, srcVersion, homepage, libName, author, description, download, repo, authGithub} from '../../package.json'

export default {
    name: 'Home',
    components: {},
    data() {
        return {
            icons,
            version,
            srcVersion,
            description,
            homepage,
            author,
            libName,
            download,
            repo,
            authGithub,
            filterName: ''
        }
    },
    computed: {
        lists() {
            if (this.filterName) {
                return this.icons.filter(item => item.indexOf(this.filterName) > -1)
            }
            return this.icons
        },
    },
}
</script>

<style lang="scss">
.bd-navbar {
    background-color: #7952b3;
}

.code-previewer {
    padding: 16px;
    background-color: #f6f8fa;
}
.icons-item{
    cursor: pointer;
}
.icons-item-icon{
    font-size: 32px;
    &:hover{
        color: green;
    }
}
</style>
