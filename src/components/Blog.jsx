import "./Blog.css";

function Blog () {
    return (
        <>
        <section class="blog" id="blog">
            <div>
                <h1>Writings</h1>
            </div>
                <li>
                    <div>
                        <time datetime="2021-04-21">April 21 2021</time>
                        <h2>
                            <a href="https://easyanalyticalchemist.blogspot.com/2021/04/kadar-protein-dalam-sampel-kacang-hijau.html" 
                            title="Penentuan Kadar Protein">
                            Penentuan Kadar Protein
                            </a>
                        </h2>
                        <div>
                            <p>Menentukan kadar protein dalam sampel kacang hijau</p><hr/>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <time datetime="2021-04-21">April 17 2021</time>
                        <h2>
                            <a href="https://easyanalyticalchemist.blogspot.com/2021/04/laporan-pembuatan-produk-pembersih.html" 
                            title="Pembuatan Produk Pembersih Perkakas">
                            Pembuatan Produk Pembersih Perkakas
                            </a>
                        </h2>
                        <div>
                            <p>Membuatan produk pembersih perkakas (sabun minyak jelantah)</p><hr/>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <time datetime="2021-04-21">April 18 2021</time>
                        <h2>
                            <a href="https://easyanalyticalchemist.blogspot.com/2021/04/praktikum-penentuan-kadar-iod-iodat.html" 
                            title="Penentuan Kadar Iod (Iodat)">
                            Penentuan Kadar Iod (Iodat)
                            </a>
                        </h2>
                        <div>
                            <p>Menentukan kadar Iod (Iodat) pada garam dapur</p><hr/>
                        </div>
                    </div>
                </li>
        </section>
        </>
    )
}

export default Blog;