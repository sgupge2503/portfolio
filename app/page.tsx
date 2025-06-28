import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Trophy,
  Code,
  Heart,
  Briefcase,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">hoge</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8"></p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">AIエンジニアになるためにお勉強中です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  お問い合わせ
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* 経歴セクション */}
          <section>
            <div className="flex items-center mb-8">
              <Briefcase className="mr-3 h-6 w-6 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">経歴</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    職歴
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">株式会社Elcamy</h4>
                    <p className="text-slate-600">インターン</p>
                    <p className="text-sm text-slate-500">2024年10月 - 現在</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    学歴
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">佐賀大学</h4>
                    <p className="text-slate-600">理工学部 理工学科 知能情報システム工学コース 学士</p>
                    <p className="text-sm text-slate-500">2023年4月 -</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 趣味セクション */}
          <section>
            <div className="flex items-center mb-8">
              <Heart className="mr-3 h-6 w-6 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">趣味・興味</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-slate-700 leading-relaxed">
                  新しい技術の学習と実験が大好きです。週末はオープンソースプロジェクトへの貢献や、
                  個人プロジェクトの開発に時間を費やしています。また、読書（特に技術書）、
                  カメラでの風景撮影、そして美味しいコーヒーを淹れることも楽しんでいます。
                  最近はAIと機械学習の分野にも興味を持ち、関連する勉強会やカンファレンスに積極的に参加しています。
                </p>
              </CardContent>
            </Card>
          </section>

          {/* 保有技術セクション */}
          <section>
            <div className="flex items-center mb-8">
              <Code className="mr-3 h-6 w-6 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">保有技術</h2>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {/* React */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    {/* 見出しの文字サイズを下げる */}
                    <h3 className="text-base font-semibold text-slate-900">React</h3>
                    <span className="text-xs text-slate-500">3年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* TypeScript */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">TypeScript</h3>
                    <span className="text-xs text-slate-500">2年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next.js */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">Next.js</h3>
                    <span className="text-xs text-slate-500">2年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 3 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Python */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">Python</h3>
                    <span className="text-xs text-slate-500">4年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 5 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Node.js */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">Node.js</h3>
                    <span className="text-xs text-slate-500">2年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 3 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Docker */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">Docker</h3>
                    <span className="text-xs text-slate-500">1年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 2 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AWS */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">AWS</h3>
                    <span className="text-xs text-slate-500">1年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 2 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Git */}
              <Card>
                <CardContent className="pt-3 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-slate-900">Git</h3>
                    <span className="text-xs text-slate-500">3年</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* インターンシップ・実務経験セクション */}
          <section>
            <div className="flex items-center mb-8">
              <Briefcase className="mr-3 h-6 w-6 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">インターンシップ・実務経験</h2>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>株式会社メルカリ</CardTitle>
                  <CardDescription>ソフトウェアエンジニアインターン</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-2">2020年8月 - 2020年9月（2ヶ月間）</p>
                  <p className="text-slate-700">
                    モバイルアプリのパフォーマンス改善プロジェクトに参加。 React
                    Nativeを使用したUI改善と、APIレスポンス時間の最適化を担当。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>株式会社サイバーエージェント</CardTitle>
                  <CardDescription>フロントエンドエンジニアインターン</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-2">2020年2月 - 2020年3月（2ヶ月間）</p>
                  <p className="text-slate-700">
                    新規Webサービスの開発チームでReact/TypeScriptを使用したフロントエンド開発を担当。
                    ユーザビリティテストの結果を基にしたUI/UX改善も経験。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* コンテスト参加歴セクション */}
          <section>
            <div className="flex items-center mb-8">
              <Trophy className="mr-3 h-6 w-6 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">コンテスト参加歴</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AtCoder Beginner Contest</CardTitle>
                  <CardDescription>競技プログラミング</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">レーティング: 1200+ (茶色)</p>
                  <p className="text-slate-600">定期的に参加し、アルゴリズム力を向上</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">JPHACKS 2020</CardTitle>
                  <CardDescription>ハッカソン</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">企業賞受賞</p>
                  <p className="text-slate-600">チーム開発でWebアプリケーションを48時間で開発</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ブログセクション */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">最新のブログ記事</h2>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  すべて見る
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">Next.js 14の新機能を試してみた</CardTitle>
                  <CardDescription>2024年1月15日</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 line-clamp-3">
                    Next.js 14で追加された新機能について実際に使ってみた感想と、
                    パフォーマンスの改善点について詳しく解説します...
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">TypeScriptの型安全性を活用したAPI設計</CardTitle>
                  <CardDescription>2024年1月8日</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 line-clamp-3">
                    TypeScriptの強力な型システムを活用して、 より安全で保守性の高いAPI設計を行う方法について...
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">React Server Componentsの実践的な使い方</CardTitle>
                  <CardDescription>2023年12月20日</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 line-clamp-3">
                    React Server Componentsを実際のプロジェクトで使用した経験を基に、 効果的な活用方法を紹介します...
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SNSリンクセクション */}
          <section id="contact">
            <div className="flex items-center mb-8">
              <Mail className="mr-3 h-6 w-6 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">お問い合わせ・SNS</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://twitter.com" target="_blank">
                      <Twitter className="mr-2 h-5 w-5" />
                      Twitter
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="mailto:contact@example.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-600">
            <p>&copy; 2024 田中太郎. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
