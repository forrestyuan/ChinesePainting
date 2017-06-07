<?php
    header('Content-Type:text/html;Charset=utf-8');
    $servername="localhost";
    $username="root";
    $password="root";
    $database="mydb";
    //连接到数据库
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $database);
    // 检测连接
    if ($conn->connect_error) {
         die("连接失败: " . $conn->connect_error);
    }
    $page=0;//页数 ，初始为0即第一页
    $pageCount=2; //每页条数，默认为5
    $count=0;
    if(isset($_REQUEST['page'])){
        $page=$_REQUEST['page'];
        //分页读取数据
        $sql = "SELECT * FROM flower limit ".($page*$pageCount).",".$pageCount;
        #echo $sql;
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            // 输出每行数据
            while($row = $result->fetch_assoc()) {
                  $arr[$count++]=array($row["article_thumbnail"],
                                       $row["article_href"],
                                       $row["article_title"],
                                       $row["article_year"],
                                       $row["article_author"],
                                       $row["article_content"]
                                    );
            }
            $callback=$_GET['callback']; 
            $result=json_encode($arr,true);
            echo  $callback."($result)";
        } else {
            echo "0";
        }
    }else{
       echo "no page input, init page=0";
    }
    $conn->close();
?>