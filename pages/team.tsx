---
layout: default
title: Team
subtitle: Our Team
use-site-title: true
permalink: /team/
---

import Image from "/png/team"
import { Card, CardContent } from "@/components/ui/card"

// 定义成员类型
type Member = {
  name: string
  role: string
  image: string
  bio: string
}

// 示例数据
const leader: Member = {
  name: "Prof. Jane Doe",
  role: "Lab Director",
  image: "/png/team/all_102024.jpg",
  bio: "Prof. Jane Doe has over 20 years of experience in the field and has published numerous papers in top journals."
}

const members: Member[] = [
  {
    name: "John Smith",
    role: "Senior Researcher",
    image: "/png/team/chenxy.jpg",
    bio: "John specializes in data analysis and machine learning algorithms."
  },
  {
    name: "Emily Chen",
    role: "PhD Student",
    image: "/png/team/dengyy.jpg",
    bio: "Emily is researching novel approaches to quantum computing."
  },
  {
    name: "Michael Johnson",
    role: "Lab Technician",
    image: "/png/team/liz.jpg",
    bio: "Michael maintains our state-of-the-art equipment and assists in experiments."
  },
  // 可以继续添加更多成员
]

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">Our Research Team</h1>
      
      {/* 实验室领导部分 */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Lab Leader</h2>
        <Card className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/3">
            <Image
              src={leader.image}
              alt={leader.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <CardContent className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold">{leader.name}</h3>
            <p className="text-muted-foreground mb-4">{leader.role}</p>
            <p>{leader.bio}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* 团队成员部分 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                <p className="text-muted-foreground text-center mb-2">{member.role}</p>
                <p className="text-sm text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
