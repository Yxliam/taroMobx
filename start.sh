#!/bin/sh

# 显示菜单
showMenu(){
    echo "=================输入要启动的环境======================"
    echo "1:启动开发环境"
    echo "2:打包测试环境"
    echo "3:打包生产环境"
    echo "0:退   出"
}

# 编译成什么环境
showDev(){
    echo "==================输入要编译的小程序================="
    echo "1:h5(H5)"
    echo "2:weapp(微信小程序)"
    echo "3:swan(百度小程序)"
    echo "4:alipay(支付宝小程序)"
    echo "5:tt(头条小程序)"
    
}

# 运行环境
runEnvironment(){
  isDev=$opt
  showDev
  dev="weapp"
   while read devs
    do
        case $devs in
            1)
               dev="h5"
               break;;
            2) 
               dev='weapp'
               break;;
            3)
               dev='swan'
               break;;
            4)
               dev='alipay'
               break;;
            5)
               dev='tt'
               break;;
         esac
    done
   echo "=================end======================"
   #得到当前目录文件路径
   NPWD=$(echo `pwd`)
   cpfile="$NPWD/src/server/development/config.js $NPWD/src/utils/constants"
   npmDev="run dev:$dev"
   tip='正在为你打包'$dev'的开发环境请稍后～～～'
   if [ "$isDev" = 1 ] ; then
      tip='正在为你打包'$dev'的开发环境请稍后～～～'
      cpfile="$NPWD/src/server/development/config.js $NPWD/src/utils/constants"
   elif [ "$isDev" = 2 ] ; then
      tip='正在为你打包'$dev'的测试环境请稍后～～～'
      cpfile="$NPWD/src/server/development/config.js $NPWD/src/utils/constants"
   elif [ "$isDev" = 3 ] ; then
      tip='正在为你打包'$dev'的生产环境请稍后～～～'
      cpfile="$NPWD/src/server/production/config.js $NPWD/src/utils/constants";
      npmDev="run build:$dev"
   else 
      echo "输入异常"
   fi
   echo $tip
  # 进入该目录删除config.js
  cd $NPWD/src/utils/constants
#   rm config.js
  # 复制配置文件，然后打包
  cp $cpfile
  npm $npmDev
}









# 主函数
main(){
    # 显示菜单
    showMenu
    while read opt
    do
        case $opt in
            1) runEnvironment $opt 
               break;;
            2) runEnvironment $opt 
               break;;
            3) runEnvironment $opt 
               break;;
            0)
               echo "您好，尊敬的部署人员，已经为您取消打包代码，如有需要请下次执行，谢谢。"
               break;;
        esac
    done
}

# 执行main函数
main