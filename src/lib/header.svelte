
<script>

    let header = "header"

</script>

<div class="header">
    <nav>
        <h1>{header}</h1>
        <div class="nav-links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="about">About Me</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

</div>

<!-- --------CSS----------- -->

<style>

.nav-links{
        flex: 1;
        text-align: center;
        
    }

    .nav-links ul li{
        list-style: none;
        display: inline-block;
        padding: 8px 12px;
        position: relative;
    }

    .nav-links ul li a{
        color: red;
        text-decoration: none;
        font-size: 20px;
    }

    .nav-links ul li::after{
        content: '';
        width: 0%;
        height: 2px;
        background: #f44336;
        display: block;
        margin: auto;
        transition: 0.5s;
    }

    .nav-links ul li:hover::after{
        width: 100%;
    }

</style>